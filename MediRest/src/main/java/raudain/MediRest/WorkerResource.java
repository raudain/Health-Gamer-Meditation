package raudain.MediRest;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("workers")
public class WorkerResource
{
	
	WorkerRepository repo = new WorkerRepository();
	
	@GET
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public List<Worker> getWorkers() {	
		System.out.println("getWorkers called...");
		return repo.getWorkers();
	}
	
	@GET
	@Path("worker/{id}")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public Worker getWorker(@PathParam("id") short id)
	{
		return repo.getWorker(id);
	}
	
	@POST
	@Path("alien")
	@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
	public Worker createWorker(Worker a1)
	{
		System.out.println(a1);
		repo.create(a1);
		
		return a1;
	}
	
	@PUT
	@Path("alien")
	@Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
	public Worker updateAlien(Worker a1)
	{
		System.out.println(a1);
		if(repo.getWorker(a1.getRoom()).getRoom()==0)
		{
			repo.create(a1);
		}
		else
		{
			repo.update(a1);
		}
		return a1;
	}
	
	@DELETE
	@Path("alien/{id}")
	public Worker killAlien(@PathParam("id") short id)
	{
		Worker a = repo.getWorker(id);
		
		if(a.getRoom()!=0)
			repo.delete(id);
		
		return a;
	}
}
