# Using SendGrid's Python Library
# https://github.com/sendgrid/sendgrid-python
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_email(to_, subject_, html_content_):
    message = Mail(
        from_email='no-reply@pipeline.com.my',
        to_emails=to_,
        subject=subject_,
        html_content=html_content_)

    try:
        sg = SendGridAPIClient('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')
        #sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
    except Exception as e:
        print(e.message)