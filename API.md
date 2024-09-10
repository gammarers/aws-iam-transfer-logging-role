# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamTransferLoggingRole <a name="IamTransferLoggingRole" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

new IamTransferLoggingRole(scope: Construct, id: string, props?: IamTransferLoggingRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps">IamTransferLoggingRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps">IamTransferLoggingRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addManagedPolicy">addManagedPolicy</a></code> | Attaches a managed policy to this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPolicy">addToPolicy</a></code> | Add to the policy of this principal. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPrincipalPolicy">addToPrincipalPolicy</a></code> | Adds a permission to the role's default policy document. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.attachInlinePolicy">attachInlinePolicy</a></code> | Attaches a policy to this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grant">grant</a></code> | Grant the actions defined in actions to the identity Principal on this resource. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantAssumeRole">grantAssumeRole</a></code> | Grant permissions to the given principal to assume this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantPassRole">grantPassRole</a></code> | Grant permissions to the given principal to pass this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.withoutPolicyUpdates">withoutPolicyUpdates</a></code> | Return a copy of this Role object whose Policies will not be updated. |

---

##### `toString` <a name="toString" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addManagedPolicy` <a name="addManagedPolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addManagedPolicy"></a>

```typescript
public addManagedPolicy(policy: IManagedPolicy): void
```

Attaches a managed policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addManagedPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The the managed policy to attach.

---

##### `addToPolicy` <a name="addToPolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): boolean
```

Add to the policy of this principal.

###### `statement`<sup>Required</sup> <a name="statement" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `addToPrincipalPolicy` <a name="addToPrincipalPolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPrincipalPolicy"></a>

```typescript
public addToPrincipalPolicy(statement: PolicyStatement): AddToPrincipalPolicyResult
```

Adds a permission to the role's default policy document.

If there is no default policy attached to this role, it will be created.

###### `statement`<sup>Required</sup> <a name="statement" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.addToPrincipalPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

The permission statement to add to the policy document.

---

##### `attachInlinePolicy` <a name="attachInlinePolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.attachInlinePolicy"></a>

```typescript
public attachInlinePolicy(policy: Policy): void
```

Attaches a policy to this role.

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.attachInlinePolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.Policy

The policy to attach.

---

##### `grant` <a name="grant" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grant"></a>

```typescript
public grant(grantee: IPrincipal, actions: ...string[]): Grant
```

Grant the actions defined in actions to the identity Principal on this resource.

###### `grantee`<sup>Required</sup> <a name="grantee" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grant.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

###### `actions`<sup>Required</sup> <a name="actions" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grant.parameter.actions"></a>

- *Type:* ...string[]

---

##### `grantAssumeRole` <a name="grantAssumeRole" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantAssumeRole"></a>

```typescript
public grantAssumeRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to assume this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantAssumeRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `grantPassRole` <a name="grantPassRole" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantPassRole"></a>

```typescript
public grantPassRole(identity: IPrincipal): Grant
```

Grant permissions to the given principal to pass this role.

###### `identity`<sup>Required</sup> <a name="identity" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.grantPassRole.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

---

##### `withoutPolicyUpdates` <a name="withoutPolicyUpdates" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.withoutPolicyUpdates"></a>

```typescript
public withoutPolicyUpdates(options?: WithoutPolicyUpdatesOptions): IRole
```

Return a copy of this Role object whose Policies will not be updated.

Use the object returned by this method if you want this Role to be used by
a construct without it automatically updating the Role's Policies.

If you do, you are responsible for adding the correct statements to the
Role's policies yourself.

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.withoutPolicyUpdates.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.WithoutPolicyUpdatesOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.customizeRoles">customizeRoles</a></code> | Customize the creation of IAM roles within the given scope. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn">fromRoleArn</a></code> | Import an external role by ARN. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName">fromRoleName</a></code> | Import an external role by name. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isRole">isRole</a></code> | Return whether the given object is a Role. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isConstruct"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isOwnedResource"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isResource"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `customizeRoles` <a name="customizeRoles" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.customizeRoles"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.customizeRoles(scope: Construct, options?: CustomizeRolesOptions)
```

Customize the creation of IAM roles within the given scope.

It is recommended that you **do not** use this method and instead allow
CDK to manage role creation. This should only be used
in environments where CDK applications are not allowed to created IAM roles.

This can be used to prevent the CDK application from creating roles
within the given scope and instead replace the references to the roles with
precreated role names. A report will be synthesized in the cloud assembly (i.e. cdk.out)
that will contain the list of IAM roles that would have been created along with the
IAM policy statements that the role should contain. This report can then be used
to create the IAM roles outside of CDK and then the created role names can be provided
in `usePrecreatedRoles`.

*Example*

```typescript
declare const app: App;
iam.Role.customizeRoles(app, {
  usePrecreatedRoles: {
    'ConstructPath/To/Role': 'my-precreated-role-name',
  },
});
```


###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.customizeRoles.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope to customize role creation.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.customizeRoles.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.CustomizeRolesOptions

options for configuring role creation.

---

##### `fromRoleArn` <a name="fromRoleArn" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.fromRoleArn(scope: Construct, id: string, roleArn: string, options?: FromRoleArnOptions)
```

Import an external role by ARN.

If the imported Role ARN is a Token (such as a
`CfnParameter.valueAsString` or a `Fn.importValue()`) *and* the referenced
role has a `path` (like `arn:...:role/AdminRoles/Alice`), the
`roleName` property will not resolve to the correct value. Instead it
will resolve to the first path component. We unfortunately cannot express
the correct calculation of the full path name as a CloudFormation
expression. In this scenario the Role ARN should be supplied without the
`path` in order to resolve the correct role resource.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn.parameter.roleArn"></a>

- *Type:* string

the ARN of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleArn.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleArnOptions

allow customizing the behavior of the returned role.

---

##### `fromRoleName` <a name="fromRoleName" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.fromRoleName(scope: Construct, id: string, roleName: string, options?: FromRoleNameOptions)
```

Import an external role by name.

The imported role is assumed to exist in the same account as the account
the scope's containing Stack is being deployed to.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName.parameter.scope"></a>

- *Type:* constructs.Construct

construct scope.

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName.parameter.id"></a>

- *Type:* string

construct id.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName.parameter.roleName"></a>

- *Type:* string

the name of the role to import.

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.fromRoleName.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_iam.FromRoleNameOptions

allow customizing the behavior of the returned role.

---

##### `isRole` <a name="isRole" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isRole"></a>

```typescript
import { IamTransferLoggingRole } from '@gammarers/aws-iam-transfer-logging-role'

IamTransferLoggingRole.isRole(x: any)
```

Return whether the given object is a Role.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.isRole.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.assumeRoleAction">assumeRoleAction</a></code> | <code>string</code> | When this Principal is used in an AssumeRole policy, the action to use. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.policyFragment">policyFragment</a></code> | <code>aws-cdk-lib.aws_iam.PrincipalPolicyFragment</code> | Returns the role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleArn">roleArn</a></code> | <code>string</code> | Returns the ARN of this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleId">roleId</a></code> | <code>string</code> | Returns the stable and unique string identifying the role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleName">roleName</a></code> | <code>string</code> | Returns the name of the role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.assumeRolePolicy">assumeRolePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The assume role policy document associated with this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | Returns the permissions boundary attached to this role. |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.principalAccount">principalAccount</a></code> | <code>string</code> | The AWS account ID of this principal. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `assumeRoleAction`<sup>Required</sup> <a name="assumeRoleAction" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.assumeRoleAction"></a>

```typescript
public readonly assumeRoleAction: string;
```

- *Type:* string

When this Principal is used in an AssumeRole policy, the action to use.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `policyFragment`<sup>Required</sup> <a name="policyFragment" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.policyFragment"></a>

```typescript
public readonly policyFragment: PrincipalPolicyFragment;
```

- *Type:* aws-cdk-lib.aws_iam.PrincipalPolicyFragment

Returns the role.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Returns the ARN of this role.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

Returns the stable and unique string identifying the role.

For example,
AIDAJQABLZS4A3QDU576Q.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Returns the name of the role.

---

##### `assumeRolePolicy`<sup>Optional</sup> <a name="assumeRolePolicy" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.assumeRolePolicy"></a>

```typescript
public readonly assumeRolePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

The assume role policy document associated with this role.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

Returns the permissions boundary attached to this role.

---

##### `principalAccount`<sup>Optional</sup> <a name="principalAccount" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRole.property.principalAccount"></a>

```typescript
public readonly principalAccount: string;
```

- *Type:* string

The AWS account ID of this principal.

Can be undefined when the account is not known
(for example, for service principals).
Can be a Token - in that case,
it's assumed to be AWS::AccountId.

---


## Structs <a name="Structs" id="Structs"></a>

### IamTransferLoggingRoleProps <a name="IamTransferLoggingRoleProps" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.Initializer"></a>

```typescript
import { IamTransferLoggingRoleProps } from '@gammarers/aws-iam-transfer-logging-role'

const iamTransferLoggingRoleProps: IamTransferLoggingRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.inlinePolicies">inlinePolicies</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.managedPolicies">managedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.maxSessionDuration">maxSessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | *No description.* |
| <code><a href="#@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: {[ key: string ]: PolicyDocument};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_iam.PolicyDocument}

---

##### `managedPolicies`<sup>Optional</sup> <a name="managedPolicies" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.managedPolicies"></a>

```typescript
public readonly managedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]

---

##### `maxSessionDuration`<sup>Optional</sup> <a name="maxSessionDuration" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.maxSessionDuration"></a>

```typescript
public readonly maxSessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `path`<sup>Optional</sup> <a name="path" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@gammarers/aws-iam-transfer-logging-role.IamTransferLoggingRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---



