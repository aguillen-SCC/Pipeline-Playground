import { Stage, StageProps } from "aws-cdk-lib";
import { ApiStack } from "./ApiStack";
import { Construct } from "constructs";

export class Portal_API extends Stage { 
    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        new ApiStack(this, 'RestApi')
    }
}