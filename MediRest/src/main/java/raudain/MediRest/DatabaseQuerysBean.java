package raudain.MediRest;

/**
 * Helper class for externalization of queries
 */
public class DatabaseQuerysBean {
	
	private String listWorkers = "";
	private String updateWorker = "";
	
	public String getListWorkers() {
		return listWorkers;
	}

	public void setListWorkers(String listWorkers) {
		this.listWorkers = listWorkers;
	}
	
	public String getUpdateWorker() {
		return updateWorker;
	}

	public void setUpdateWorker(String updateEvent) {
		this.updateWorker = updateEvent;
	}
}
