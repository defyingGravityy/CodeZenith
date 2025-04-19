# resume_app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.upload_resume, name='upload_resume'), 
         path('', views.upload_resume, name='upload_resume'),  # So `/upload/` hits this
 # This maps to the upload_resume view
]
