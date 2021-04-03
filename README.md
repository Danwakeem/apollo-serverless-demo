# Status
✅ - Working

> Seems to not capture every request though 🤔 I send about 10 and only see 5 in the dashboard 

# Serverless GQL Demo
This is a super bare bones AWS Lambda graphql server. I put this together to demo some issues I was having with apollo's `ApolloServerPluginUsageReporting` plugin not working an a lambda environment.

## Local testing

Input your own Apollo studio environment variable by creating a `.env` file at the root of the project that looks exactly like the `env.sample`.

Install dependencies

```
yarn install
```

Start the server local

```
yarn start -s local
```

## Deploying to AWS

```
yarn sls deploy -s test
```

## Health check 

Hi the endpoint with curl 😎

```
curl --location --request POST 'http://BASE_URL/graphql' \
--header 'x-api-key: KEY HERE' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"{\n    testHealthCheck\n}","variables":{}}'
```