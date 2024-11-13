import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PipelinePlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'PracticePipeline', {
      pipelineName: 'PracticePipeline',
      synth: new ShellStep('Synth', {
        input : CodePipelineSource.gitHub('aguillen-SCC/Pipeline-Playground', 'main'),
        commands: [

          'npm ci',
          'npx cdk synth'
        ],

        primaryOutputDirectory: 'cdk.out'
      })
    })

    const testStage = pipeline.addStage(new PipelineStage(this, 'PipelineTestStage', {
      stageName: 'test'
    }))
  }
}
