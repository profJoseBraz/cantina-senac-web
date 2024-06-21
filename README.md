# Cantina Senac 🍩🍰 ☕
Web app em desenvolvimento para a cantina do Senac de Campo Mourão - PR.

# API
Domínio: https://cantina-senac-api-prod.up.railway.app/

Endpoins:
- ## category 🏷️
    - **GET**
      - Parâmetros
        - nenhum
          - https://cantina-senac-api-prod.up.railway.app/category
        - id
          - https://cantina-senac-api-prod.up.railway.app/category?id=1
        - name
          - https://cantina-senac-api-prod.up.railway.app/category?name=Doces
- ## orderItems 🗒️☕🍰
    - **GET**
      - Parâmetros
        - nenhum
          - https://cantina-senac-api-prod.up.railway.app/orderItems
        - id
          - https://cantina-senac-api-prod.up.railway.app/orderItems?id=1
        - orderId
          - https://cantina-senac-api-prod.up.railway.app/orderItems?orderId=1
        - productId
          - https://cantina-senac-api-prod.up.railway.app/orderItems?productId=1
- ## orders 🗒️ ✍🏻
    - **GET**
        - Parâmetros
            - nenhum
                - https://cantina-senac-api-prod.up.railway.app/orders
            - id
                - https://cantina-senac-api-prod.up.railway.app/orders?id=1
            - paymentMethodId
                - https://cantina-senac-api-prod.up.railway.app/orders?paymentMethodId=1
            - customerName
                - https://cantina-senac-api-prod.up.railway.app/orders?customerName=Maria
            - date
                - https://cantina-senac-api-prod.up.railway.app/orders?date=2024-01-01&operator=>
            - value
                - https://cantina-senac-api-prod.up.railway.app/orders?value=10&operator=<
-  ## paymentMethod 💵💳
    - **GET**
        - Parâmetros
            - nenhum
                - https://cantina-senac-api-prod.up.railway.app/paymentMethod
            - id
                - https://cantina-senac-api-prod.up.railway.app/paymentMethod?id=1
-  ## production ⚙️
    - **GET**
        - Parâmetros
            - nenhum
                - https://cantina-senac-api-prod.up.railway.app/production
            - id
                - https://cantina-senac-api-prod.up.railway.app/production?id=1
            - productId
                - https://cantina-senac-api-prod.up.railway.app/production?productId=1
            - date
                - https://cantina-senac-api-prod.up.railway.app/production?date=2024-01-01&operator==
            - amount
                - https://cantina-senac-api-prod.up.railway.app/production?amount=10&operator=>   

 **Obs: para filtragem de datas ou números utiliza-se os operadores **">"**, **"<"** e **"="** (maior, menor e igual, respectivamente)**
