from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GymViewSet, MembershipOfferViewSet, MembershipViewSet

router = DefaultRouter()
router.register(r'gyms', GymViewSet)
router.register(r'membership-offers', MembershipOfferViewSet)
router.register(r'memberships', MembershipViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
