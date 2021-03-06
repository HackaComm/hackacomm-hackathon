# Generated by Django 3.1.4 on 2021-01-08 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Badge',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('description', models.CharField(blank=True, max_length=60)),
                ('picture_link', models.CharField(blank=True, max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Challenge',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('city', models.CharField(default='Unknown', max_length=60)),
                ('organizer', models.CharField(default='Anonymous', max_length=60)),
                ('duration', models.PositiveIntegerField(default=30)),
                ('reward', models.PositiveIntegerField(default=100)),
            ],
        ),
        migrations.CreateModel(
            name='Charity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('picture_link', models.CharField(blank=True, max_length=1000, null=True)),
                ('amount', models.PositiveIntegerField(default=5)),
                ('cost', models.PositiveIntegerField(default=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Prize',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('picture_link', models.CharField(blank=True, max_length=1000, null=True)),
                ('amount', models.PositiveIntegerField(default=5)),
                ('cost', models.PositiveIntegerField(default=1000)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Guest', max_length=60)),
                ('deeds', models.PositiveIntegerField(default=0)),
                ('score', models.PositiveIntegerField(default=0)),
                ('rank', models.PositiveIntegerField(default=2109)),
                ('badges', models.ManyToManyField(to='core.Badge')),
                ('friends', models.ManyToManyField(related_name='_user_friends_+', to='core.User')),
                ('goals', models.ManyToManyField(to='core.Challenge')),
            ],
        ),
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
                ('challenge', models.ManyToManyField(to='core.Challenge')),
                ('charity', models.ManyToManyField(to='core.Charity')),
            ],
        ),
    ]
