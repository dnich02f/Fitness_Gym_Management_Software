from rest_framework import serializers
from .models import Gym, MembershipOffer, Membership


class GymSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gym
        fields = '__all__'


class MembershipOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembershipOffer
        fields = '__all__'


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = '__all__'
