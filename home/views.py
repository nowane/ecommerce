from django.shortcuts import render
from products.models import Product


def index(request):
    """ View to return index page """
    image_carousel = Product.objects.all()
    context = {
              'image_carousel': image_carousel,
              }
    return render(request, "home/index.html", context)
