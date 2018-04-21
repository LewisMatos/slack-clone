import StringIO
import zipfile
import mimetypes
import boto3
from botocore.client import Config
import mimetypes

def lambda_handler(event,context):
   
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:508550448516:deployPortfolioTopic')
    
    try:
        s3 = boto3.resource('s3')
        build_bucket = s3.Bucket('portfoliobuild.lewismatos.com')
        portfolio_bucket = s3.Bucket('portfolio.lewismatos.com')
        
        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
        topic.publish(Subject="Test #2", Message="Portfolio deployed succesfully")
    except:
        topic.publish(Subject="Test #2", Message="Portfolio failed")
        raise
        return 'Hello from lambda'