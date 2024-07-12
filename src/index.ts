import { Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported Omit
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface IamRDSMonitoringRoleProps extends Omit<iam.RoleProps, 'assumedBy'> {}
 */
export interface IamTransferLoggingRoleProps {
  readonly roleName?: string;
  readonly managedPolicies?: iam.IManagedPolicy[];
  readonly permissionsBoundary?: iam.IManagedPolicy;
  readonly maxSessionDuration?: Duration;
  readonly inlinePolicies?: {
    [name: string]: iam.PolicyDocument;
  };
  readonly path?: string;
  readonly description?: string;
}

export class IamTransferLoggingRole extends iam.Role {
  constructor(scope: Construct, id: string, props?: IamTransferLoggingRoleProps) {
    super(scope, id, {
      roleName: props?.roleName,
      permissionsBoundary: props?.permissionsBoundary,
      maxSessionDuration: props?.maxSessionDuration,
      path: props?.path,
      description: (() => {
        return props?.description ?? 'transfer logging role.';
      })(),
      assumedBy: new iam.ServicePrincipal('transfer.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSTransferLoggingAccess'),
      ],
    });
  }
}