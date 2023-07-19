# Scrape counters for heroes

from urllib.request import urlopen
import requests
from bs4 import BeautifulSoup


def scrape_dota_fandom():
    dota2_fandom_url = "https://dota2.fandom.com/wiki/Windranger/Counters"

    response = requests.get(dota2_fandom_url)

    soup = BeautifulSoup(response.text, 'html.parser')

    # TODO: Find the <span> element with id="Bad_against..."
    # TODO: There will be a div that contains a div with a link <a title="(counter)">

    bad_against_span = soup.find(id="Bad_against...")

    counters_parent_container = soup.find("div", class_="mw-parser-output")

    # divs = counters_parent_container.find("div")

    print(counters_parent_container.contents)


def scrape_dotabuff():
    url = "http://www.dotabuff.com/heroes/ancient-apparition/counters"

    response = requests.get(url)

    soup = BeautifulSoup(response.text, 'html.parser')

    print(soup.prettify())

    counter_outline = soup.find("section")
    print(counter_outline)



if __name__ == '__main__':
    scrape_dota_fandom()
    # scrape_dotabuff()
