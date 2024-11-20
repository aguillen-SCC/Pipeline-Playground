import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { ApiStack } from './ApiStack';
import { Portal_API } from './Portal_Api';

export class PipelinePlaygroundStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'PracticePipeline', {
      pipelineName: 'Portal_API_Pipeline',
      synth: new ShellStep('Synth', {
        input : CodePipelineSource.gitHub('aguillen-SCC/Pipeline-Playground', 'main'),
        commands: [

          'npm ci',
          'npx cdk synth'
        ],

        primaryOutputDirectory: 'cdk.out'
      })
    })

    pipeline.addStage(
      new Portal_API(this, 'Dev', {
      env: {
        account: '234977570647',
        region: 'us-east-1',
      },
    })
  )
  }
}
