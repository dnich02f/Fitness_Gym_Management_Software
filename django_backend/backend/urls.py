from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/gym_users/', include('gym_users.urls')),
    path('api/gym_management/', include('gym_management.urls')),
]
