import { getSession, addSession, deleteSession } from './api';
import { transformUser } from './transformers';

export const sessions = {
    create(user, action) {
        const hash = Math.random().toFixed(50);
        const processedUser = action === 'authorize' ? user : transformUser(user);

        addSession(hash, processedUser);

        return hash;
    },
    async remove(hash) {
        const session = await getSession(hash);

        if (!session) {
            return;
        }

        deleteSession(session.id);
    },
    async access(hash, accessRoles) {
        const dbSession = await getSession(hash);

        return !!dbSession?.user && accessRoles.includes(dbSession.user?.roleId);
    },
};
