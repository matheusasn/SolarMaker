# Generated by Django 3.2.6 on 2022-10-21 02:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.client', verbose_name='Cliednte'),
        ),
    ]