import type { Member } from '../types/Member';
import type { MemberDetail } from '../types/MemberDetail';

export const memberService = {
  async getMembers(org: string): Promise<Member[]> {
    const res = await fetch(`https://api.github.com/orgs/${org}/members`);
    if (!res.ok) return [];
    const data = await res.json();
    return data as Member[];
  },

  async getMemberDetail(username: string): Promise<MemberDetail> {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('Member not found');
    const data = await res.json();
    return data as MemberDetail;
  }
};