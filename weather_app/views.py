import requests
from django.shortcuts import render
from django.http import JsonResponse
from django.conf import settings

def index(request):
    return render(request, 'weather_app/index.html')

def get_weather(request, city_name: str) -> JsonResponse:
    """
    Fetches the current weather data for a specified city using the WeatherAPI and returns the data as a JSON response.

    Args:
        request: The HTTP request object.
        city_name: The name of the city for which the weather data is to be fetched.

    Returns:
        JSON response containing the weather data on success, or JSON response with an error message and a 404 status code on failure.
    """
    API_KEY = settings.WEATHER_API_KEY

    url = f'http://api.weatherapi.com/v1/current.json?key={API_KEY}&q={city_name}'
    response = requests.get(url)

    if response.status_code == 200:
        return JsonResponse(response.json())
    else:
        return JsonResponse({'error': 'City not found'}, status=404)
