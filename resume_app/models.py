# resume_app/models.py
from django.db import models

class Resume(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    file = models.FileField(upload_to='resumes/')  # This will store PDFs
    extracted_text = models.TextField()  # Store the extracted text from the PDF

    def __str__(self):
        return self.name
