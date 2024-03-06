from rest_framework import viewsets
from .models import Gym, MembershipOffer, Membership
from .serializers import GymSerializer, MembershipOfferSerializer, MembershipSerializer


class GymViewSet(viewsets.ModelViewSet):
    queryset = Gym.objects.all()
    serializer_class = GymSerializer


class MembershipOfferViewSet(viewsets.ModelViewSet):
    queryset = MembershipOffer.objects.all()
    serializer_class = MembershipOfferSerializer


class MembershipViewSet(viewsets.ModelViewSet):
    queryset = Membership.objects.all()
    serializer_class = MembershipSerializer
