package raudain.MediRest;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Video {
	private String staticThumbnail;
    private String link;
    private String caption;
    private int date;

    public String getLink() {
        return link;
    }


    public void setLink(String link) {
        this.link = link;
    }

    public String getStaticThumbnail() {
        return staticThumbnail;
    }

    public void setStaticThumbnail(String thumbnail) {
        this.staticThumbnail = thumbnail;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }
}
