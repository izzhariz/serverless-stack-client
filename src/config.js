const dev = {
    STRIPE_KEY: "pk_test_51HcpYmKP6UE3xOsRwpDqTh6YjMwtzuG0OXcI42n7oitI9zaePV1mIv6IE05rZU3gI8HmcscDS4nvsCkx24VK6kNB00KXccsnid",
    s3: {
        REGION: "us-east-1",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-uckk1mliztp2",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://2uwzrnw3ae.execute-api.us-east-1.amazonaws.com/dev",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_Nz775Tiux",
        APP_CLIENT_ID: "26q97fgsiqaase9o0egpuv4lbf",
        IDENTITY_POOL_ID: "us-east-1:e7169dba-a987-452c-961b-b855c5defc7d",
    },
};

const prod = {
    STRIPE_KEY: "pk_test_51HcpYmKP6UE3xOsRwpDqTh6YjMwtzuG0OXcI42n7oitI9zaePV1mIv6IE05rZU3gI8HmcscDS4nvsCkx24VK6kNB00KXccsnid",
    s3: {
        REGION: "us-east-1",
        BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-2z6h2uzdntf1"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://2nwso2czik.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_9dKvf9VAu",
        APP_CLIENT_ID: "2nshmpuct0lq0r2q950j3vh0a2",
        IDENTITY_POOL_ID: "us-east-1:4d888b2e-feed-40d2-8ca1-4fb40545b3b5"
    }
};

const config = {
    MAX_ATTACHMENT_SIZE:5000000,
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;