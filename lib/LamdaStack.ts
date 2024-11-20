import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";

interface LamdaStackProps extends StackProps {
    stageName?: string
}
export class LamdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props?: LamdaStackProps) {
        super(scope, id, props)

        const helloLambda = new NodejsFunction(this, 'hello-lambda', {
            runtime: Runtime.NODEJS_20_X,
            handler: 'handler',
            entry: (join(__dirname,  '..', 'services', 'hello.ts')),
        })

        this.helloLambdaIntegration = new LambdaIntegration(helloLambda)
    }

}