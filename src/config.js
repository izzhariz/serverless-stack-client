const config = {
    STRIPE_KEY: "pk_test_51HcpYmKP6UE3xOsRwpDqTh6YjMwtzuG0OXcI42n7oitI9zaePV1mIv6IE05rZU3gI8HmcscDS4nvsCkx24VK6kNB00KXccsnid",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "serverless-app-notes",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://2nwso2czik.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Er3FCNwTA",
        APP_CLIENT_ID: "5jvi2fkg95mivkdg2e243njuqu",
        IDENTITY_POOL_ID: "us-east-1:9ff9cfd3-884c-4d8a-a77e-75eca61bb730",
    },
};

export default config;