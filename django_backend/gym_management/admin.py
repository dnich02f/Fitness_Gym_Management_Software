from django.contrib import admin

from gym_users.models import UserMembership, UserProfile, Workout, Exercise, ExerciseSet, Repetition

admin.site.register(UserProfile)
admin.site.register(UserMembership)
admin.site.register(Workout)
admin.site.register(Exercise)
admin.site.register(ExerciseSet)
admin.site.register(Repetition)
