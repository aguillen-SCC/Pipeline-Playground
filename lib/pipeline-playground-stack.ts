import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PipelinePlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'PracticePipeline', {
      pipelineName: 'PracticePipeline',
      synth: new ShellStep('Synth', {
        input : CodePipelineSource.gitHub('aguillen-SCC/Pipeline-Playground', 'main'),
        commands: [
          'npm ci',
          'npx cdk synth'
        ]
      })
    })
  }
}
