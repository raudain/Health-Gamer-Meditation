package raudain.MediRest;

import java.util.List;

public class WorkerRepository {
	
	private WorkerDao dao = new WorkerDao();
	
	List<Worker> getWorkers() {
		return dao.getWorkers();
	}
	
	Worker getWorker(short room) {	
		return dao.getWorker(room);
	}

	void create(Worker worker) {
		dao.createWorker(worker);
	}
	
	void update(Worker updatedWorker) {
		dao.updateWorker(updatedWorker);
	}

	void delete(Short room) {
		dao.delete(room);
	}
}
