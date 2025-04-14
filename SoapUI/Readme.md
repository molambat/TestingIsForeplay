# 🧼 SoapUI API Checks – LamboDrip

This folder contains a SoapUI project to test basic REST behavior of the LamboDrip cart.

## Tested Endpoint

- `GET https://lambodrip.com/cart.js`

## Assertions

- Returns HTTP `200`
- JSON response is valid
- Optional: items array is not empty (if added)

## How to Use

1. Open SoapUI
2. Import `LamboDrip_Checks-soapui-project.xml`
3. Run the test case in the suite

