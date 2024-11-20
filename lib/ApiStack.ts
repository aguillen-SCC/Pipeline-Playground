import { Stack, StackProps } from 'aws-cdk-lib';
import { AuthorizationType, CognitoUserPoolsAuthorizer, Cors, LambdaIntegration, MethodOptions, ResourceOptions, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class ApiStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const api = new RestApi(this, 'testApi');

    }
}