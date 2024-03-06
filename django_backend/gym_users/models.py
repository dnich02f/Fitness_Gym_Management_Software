from django.db import models
from django.contrib.auth.models import User

from django_backend.gym_management.models import Membership


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True)
    address = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.user.username


class UserMembership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} - {self.membership.gym.name} - {self.membership.membership_offer.name}"


class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username} - {self.date}"


class Exercise(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Set(models.Model):
    workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    repetitions = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Set {self.order} - {self.exercise.name}"


class Repetition(models.Model):
    set = models.ForeignKey(Set, on_delete=models.CASCADE)
    order = models.PositiveIntegerField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    repetitions = models.PositiveIntegerField()

    def __str__(self):
        return f"Repetition {self.order} - Set {self.set.order}"
