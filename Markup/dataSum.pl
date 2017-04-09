#This file will need to be stored with the paging time text file to work

use List::MoreUtils 'pairwise';
#location of pageTiming files
my $dir = "C:/Users/CandyMan/Desktop/5k";

my @temp = ();
my @tmp =();
my @sum = ();
my $num = 0;

#Loop for accessing each Text file
foreach my $fp (glob("$dir/*.txt")) {
  open my $fh, "<", $fp or die "can't read open '$fp'";
  my $count = 0;
  
#Gathers the times for each file
while (my $line = <$fh>){
	chomp $line;
	my @strings1 = $line =~ /([0-9]+)(?:\,|\s\])/g;
	if (@strings1){
		if($count <= 15){
		push @temp, @strings1;
		}
	}
	$count++;
}

#Begins to sum the paging times
if(tmp){
  @sum = pairwise { $a + $b } @temp, @tmp;
  @tmp = @sum;
  @temp = ();
}else{
  @tmp = @temp;
  @temp = ();
}
$num++;
}
print $num . "\n";

#Stores the final times of the testing results
foreach my $s (@sum){
  print "$s, ";
  }
  open my $tot, ">", 'total.txt' or die "Failed to open $!\n"; 
	foreach my $s (@sum){
	  print $tot $s/$num . ", ";
	}
	close $tot;