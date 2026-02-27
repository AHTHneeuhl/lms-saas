export type UserRole = 'OWNER' | 'ADMIN' | 'INSTRUCTOR' | 'STUDENT';

export interface JwtPayload {
  sub: string;
  tenantId: string;
  role: UserRole;
}
