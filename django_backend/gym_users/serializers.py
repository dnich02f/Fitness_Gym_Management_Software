from rest_framework import serializers
from .models import UserProfile, UserMembership


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class UserMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMembership
        fields = '__all__'
