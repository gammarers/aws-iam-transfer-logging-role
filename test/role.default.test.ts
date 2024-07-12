import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as iam from 'aws-cdk-lib/aws-iam';
import { IamTransferLoggingRole } from '../src';

describe('IamTransferLoggingRole default Testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const role = new IamTransferLoggingRole(stack, 'IamTransferLoggingRole');

  it('Is IAM Role', async () => {
    expect(role).toBeInstanceOf(iam.Role);
  });

  const template = Template.fromStack(stack);

  it('Should match iam role.', async () => {
    template.hasResourceProperties('AWS::IAM::Role', Match.objectEquals({
      Description: 'transfer logging role.',
      AssumeRolePolicyDocument: Match.objectEquals({
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'sts:AssumeRole',
            Effect: 'Allow',
            Principal: {
              Service: 'transfer.amazonaws.com',
            },
          },
        ],
      }),
      ManagedPolicyArns: [
        {
          'Fn::Join': [
            '',
            [
              'arn:',
              {
                Ref: 'AWS::Partition',
              },
              ':iam::aws:policy/service-role/AWSTransferLoggingAccess',
            ],
          ],
        },
      ],
    }));
  });

  it('Should match snapshot.', async () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});