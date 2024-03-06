from rest_framework import viewsets, serializers
from .models import UserProfile, UserMembership, Workout, Exercise, ExerciseSet, Repetition
from .serializers import UserProfileSerializer, UserMembershipSerializer, WorkoutSerializer, ExerciseSerializer, \
    ExerciseSetSerializer, RepetitionSerializer


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class UserMembershipViewSet(viewsets.ModelViewSet):
    queryset = UserMembership.objects.all()
    serializer_class = UserMembershipSerializer


class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer


class ExerciseViewSet(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer


class ExerciseSetViewSet(viewsets.ModelViewSet):
    queryset = ExerciseSet.objects.all()
    serializer_class = ExerciseSetSerializer


class RepetitionViewSet(viewsets.ModelViewSet):
    queryset = Repetition.objects.all()
    serializer_class = RepetitionSerializer
