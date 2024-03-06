from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.db.models import Count


class Gym(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def get_total_clients(self):
        return Membership.objects.filter(gym=self).count()

    def get_membership_types(self):
        return MembershipOffer.objects.filter(gym=self)

    def get_expiring_memberships(self):
        return Membership.objects.filter(gym=self, end_date__lte=timezone.now())


class MembershipOffer(models.Model):
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration_months = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.gym.name}"


class Membership(models.Model):
    gym = models.ForeignKey(Gym, on_delete=models.CASCADE)
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    membership_offer = models.ForeignKey(MembershipOffer, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.client.username} - {self.gym.name} - {self.membership_offer.name}"
