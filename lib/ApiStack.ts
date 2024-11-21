import { Stack, StackProps } from 'aws-cdk-lib';
import { AuthorizationType, CognitoUserPoolsAuthorizer, Cors, LambdaIntegration, MethodOptions, ResourceOptions, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';


interface ApiStackProps extends StackProps {
    helloLambdaIntegration : LambdaIntegration
}

export class ApiStack extends Stack {

    constructor(scope: Construct, id: string, props?: ApiStackProps) {
        super(scope, id, props);

        const api = new RestApi(this, 'testApi');

        api.root.addMethod('GET', props?.helloLambdaIntegration)

    }
}