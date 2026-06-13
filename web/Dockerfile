<<<<<<< HEAD
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

=======
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

>>>>>>> 21b8c25215af40d5fb9ac3e7d7312aed9301b74b
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]