# Generated by Django 3.2.6 on 2022-08-21 19:21

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('name', models.CharField(max_length=255, verbose_name='Nome completo')),
                ('email', models.EmailField(max_length=100, verbose_name='Email')),
                ('phone_number', models.CharField(blank=True, max_length=15, validators=[django.core.validators.RegexValidator(message='Número inválido, insira um número nos formatos: (11)1111-1111, (11)11111-1111 ou sem formatação', regex='^\\([1-9]{2}\\)(?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$')], verbose_name='Telefone')),
                ('adress', models.CharField(default='', max_length=255, verbose_name='Endereço')),
                ('cpf_cnpj', models.CharField(max_length=20, primary_key=True, serialize=False, validators=[django.core.validators.RegexValidator(message='CPF/CNPJ inválido, insira um número nos formatos: 000.000.000-00, 00.000.000/0000-00 ou sem formatação', regex='([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})')], verbose_name='CPF/CNPJ')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(default='', max_length=255, verbose_name='Nome do projeto')),
                ('description', models.CharField(default='', max_length=255, verbose_name='Descrição')),
                ('responsible', models.CharField(default='', max_length=100, verbose_name='Responsável')),
                ('vendor', models.CharField(default='', max_length=100, verbose_name='Vendedor')),
                ('potency', models.FloatField(default=0.0, max_length=100, verbose_name='Potência')),
                ('modules', models.CharField(default='', max_length=100, verbose_name='Módulos')),
                ('inverter', models.CharField(default='', max_length=100, verbose_name='Inversor')),
                ('status', models.CharField(choices=[('Em andamento', 'Em andamento'), ('Aprovado', 'Aprovado'), ('Vistoria', 'Solicitado vistoria'), ('Concluído', 'Concluído')], max_length=50, verbose_name='Status')),
                ('budget', models.FloatField(max_length=100, verbose_name='Orçamento')),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='main.client', verbose_name='Cliente')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('generating_account', models.FileField(upload_to='project_documents/%Y/%m/%d', verbose_name='Conta geradora')),
                ('beneficiary_account', models.FileField(upload_to='project_documents/%Y/%m/%d', verbose_name='Conta beneficiária')),
                ('documents', models.FileField(upload_to='project_documents/%Y/%m/%d', verbose_name='CPF, RG ou CNH')),
                ('project_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.project', verbose_name='Projeto')),
            ],
        ),
        migrations.CreateModel(
            name='ClientDocument',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(verbose_name='Data de recebimento')),
                ('proxy', models.FileField(upload_to='client_documents/%Y/%m/%d', verbose_name='Procuração')),
                ('contract', models.FileField(upload_to='client_documents/%Y/%m/%d', verbose_name='Contrato')),
                ('client_name', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='main.client', verbose_name='Cliente')),
            ],
        ),
    ]
