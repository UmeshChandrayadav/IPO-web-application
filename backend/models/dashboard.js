let ipos = [
  // Example:
  // { id: 1, name: "ABC Corp", status: "upcoming", approved: false, subscribers: [], allotted: false }
];

module.exports = {
  getAll: () => ipos,
  getById: (id) => ipos.find(ipo => ipo.id === id),
  create: (data) => {
    const newIPO = { id: Date.now(), ...data, status: "upcoming", approved: false, subscribers: [], allotted: false };
    ipos.push(newIPO);
    return newIPO;
  },
  approve: (id) => {
    const ipo = ipos.find(ipo => ipo.id === id);
    if (ipo) ipo.approved = true;
    return ipo;
  },
  cancel: (id) => {
    const ipo = ipos.find(ipo => ipo.id === id);
    if (ipo) ipo.approved = false;
    return ipo;
  },
  changeStatus: (id, status) => {
    const ipo = ipos.find(ipo => ipo.id === id);
    if (ipo) ipo.status = status;
    return ipo;
  },
  subscribe: (id, userId) => {
    const ipo = ipos.find(ipo => ipo.id === id);
    if (ipo && !ipo.subscribers.includes(userId)) ipo.subscribers.push(userId);
    return ipo;
  },
  allot: (id) => {
    const ipo = ipos.find(ipo => ipo.id === id);
    if (ipo) ipo.allotted = true;
    return ipo;
  },
  delete: (id) => {
    const index = ipos.findIndex(ipo => ipo.id === id);
    if (index !== -1) {
      ipos.splice(index, 1);
      return true;
    }
    return false;
  }
};