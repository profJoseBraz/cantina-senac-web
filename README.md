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
    - **POST**
        - **/addOrder**
            - https://cantina-senac-api-prod.up.railway.app/orders/addOrder
                - **body**:
                    ```json
                    {
                        "paymentMethodId": 1,
                        "customerName": "Cliente Teste",
                    
                        "orderItems": [
                            {
                                "productId": 1,
                                "amount": 3
                            },
                            {
                                "productId": 4,
                                "amount": 5
                            },
                            {
                                "productId": 2,
                                "amount": 2
                            }
                        ]
                    }
                    ```
-  ## paymentMethod 💵💳
    - **GET**
        - Parâmetros
            - nenhum
                - https://cantina-senac-api-prod.up.railway.app/paymentMethod
            - id
                - https://cantina-senac-api-prod.up.railway.app/paymentMethod?id=1
-  ## production ⚙️
    - **GET**
        - **/production**
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
        - **/production/products**
            - Parâmetros
                - categoryId
                    - https://cantina-senac-api-prod.up.railway.app/production/products?categoryId=1   

    - **POST**
        - **/production/add**
            - https://cantina-senac-api-prod.up.railway.app/production/add
                - **body**
                    ```json
                    {
                        "productId": 1,
                        "date": "2024-07-17 16:57:00",
                        "amount": 50,
                        "observation": "teste"
                    }
                    ``` 
   
 **Obs: para filtragem de datas ou números utiliza-se os operadores **">"**, **"<"** e **"="** (maior, menor e igual, respectivamente)**

- ## products
    - **GET**
        - Parâmetros
            - nenhum
                - https://cantina-senac-api-prod.up.railway.app/products
            - id
                - https://cantina-senac-api-prod.up.railway.app/products?id=1
            - categoryId
                - https://cantina-senac-api-prod.up.railway.app/products?categoryId=1
            - name
                - https://cantina-senac-api-prod.up.railway.app/products?name=agua
            - description
                - https://cantina-senac-api-prod.up.railway.app/products?description=garrafa de agua
    - **POST**
        - **/add**
            - https://cantina-senac-api-prod.up.railway.app/products/add
                - **body** 
                    ```json
                    {
                        "categoryId": 1,
                        "name": "Novo prod",
                        "description": "Novo prod descrição",
                        "value": 10,
                        "image": "Novo prod.jpg"
                    }
                    ```
    - **PUT**
        - **/update**
            - https://cantina-senac-api-prod.up.railway.app/products/update?id=1
                - **body**
                   ```json
                    {
                        "categoryId": 1,
                        "name": "Novo prod",
                        "description": "Novo prod descrição",
                        "value": 10,
                        "image": "Novo prod.jpg"
                    }
                    ```
    - **DELETE**
        - **/delete**
            - https://cantina-senac-api-prod.up.railway.app/products/delete?id=1
