from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, UserMembershipViewSet, WorkoutViewSet, ExerciseViewSet, ExerciseSetViewSet, RepetitionViewSet

router = DefaultRouter()
router.register(r'user-profiles', UserProfileViewSet)
router.register(r'user-memberships', UserMembershipViewSet)
router.register(r'workouts', WorkoutViewSet)
router.register(r'exercises', ExerciseViewSet)
router.register(r'exercise-sets', ExerciseSetViewSet)
router.register(r'repetitions', RepetitionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
