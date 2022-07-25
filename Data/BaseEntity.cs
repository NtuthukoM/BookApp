namespace BookApp.Data
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastUpdate { get; set; }
    }
}
