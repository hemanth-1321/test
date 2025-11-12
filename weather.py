import logging
from typing import Dict

# Configure a module level logger
logger = logging.getLogger(__name__)
logger.addHandler(logging.NullHandler())

__all__ = ["get_weather"]


def get_weather(city: str) -> Dict[str, str]:
    """
    Return dummy weather data for the given city.

    Parameters
    ----------
    city : str
        Name of the city for which to retrieve weather information.

    Returns
    -------
    dict
        A dictionary containing dummy weather data. Keys include:
        - 'city': the requested city name
        - 'temperature': a placeholder temperature in Celsius
        - 'condition': a placeholder weather description
    """
    logger.debug("Fetching weather for city: %s", city)

    # Dummy data – in a real implementation this would query a weather API
    data = {
        "city": city,
        "temperature": "20°C",
        "condition": "Sunny",
    }

    logger.debug("Weather data retrieved: %s", data)
    return data