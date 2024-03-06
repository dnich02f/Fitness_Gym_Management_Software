from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/gym_users/', include('gym_users.urls')),
    path('api/gym_management/', include('gym_management.urls')),
]

urlpatterns += staticfiles_urlpatterns()
