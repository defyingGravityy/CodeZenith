# resume_app/views.py
from django.shortcuts import render, redirect
from .forms import ResumeForm
from .utils.parser import extract_text_from_pdf
from .models import Resume

def upload_resume(request):
    if request.method == 'POST':
        form = ResumeForm(request.POST, request.FILES)
        if form.is_valid():
            # Save the resume to the database
            resume = form.save()

            # Extract text from the uploaded PDF file
            extracted_text = extract_text_from_pdf(resume.file.path)

            # Update the extracted text field of the resume record
            resume.extracted_text = extracted_text
            resume.save()

            # You can now process the extracted text as needed
            return render(request, 'upload_success.html', {'text': extracted_text})
    else:
        form = ResumeForm()
    return render(request, 'upload_form.html', {'form': form})
