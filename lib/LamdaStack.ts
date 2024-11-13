import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

interface LamdaStackProps extends StackProps {
    stageName: string
}
export class LamdaStack extends Stack {

    constructor(scope: Construct, id: string, props: LamdaStackPropsStackProps) {
        super(scope, id, props)
    }

}